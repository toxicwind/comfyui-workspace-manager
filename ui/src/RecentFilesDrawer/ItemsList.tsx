import { DragEvent, useContext, useEffect, useState } from "react";
import { RecentFilesContext } from "../WorkspaceContext";
import {
  foldersTable,
  isFolder,
  workflowsTable,
} from "../db-tables/WorkspaceDB";
import { Folder, Workflow } from "../types/dbTypes";
import FilesListFolderItem from "./FilesListFolderItem";
import WorkflowListItem from "./WorkflowListItem";
import { Box } from "@chakra-ui/react";
import { folderOnTopLocalStorageKey } from "./types";

export default function ItemsList({
  items,
}: {
  items: Array<Folder | Workflow>;
}) {
  const [folderOnTop, setFolderOnTop] = useState(
    window.localStorage.getItem(folderOnTopLocalStorageKey) === "true",
  );
  const folders = items.filter(isFolder);
  const workflows = items.filter((item): item is Workflow => !isFolder(item));
  const parentFolderID = workflows[0]?.parentFolderID;

  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { onRefreshFilesList, draggingFile, refreshFolderStamp } =
    useContext(RecentFilesContext);

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const targetIsDroppable =
      e.relatedTarget instanceof Element &&
      e.relatedTarget.classList.contains("droppable") &&
      e.relatedTarget !== e.currentTarget;
    const targetIsChild = e.currentTarget.contains(e.relatedTarget as Node);
    // fixes a bug where the dragleave event is fired when dragging over a child element, causing elements to flicker
    if (targetIsDroppable || !targetIsChild) {
      setIsDraggingOver(false);
    }
  };

  const handleDrop = async (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!draggingFile) return setIsDraggingOver(false);
    if (isFolder(draggingFile)) {
      if (draggingFile.id === parentFolderID) return setIsDraggingOver(false);
      await foldersTable?.update({
        id: draggingFile.id,
        parentFolderID: parentFolderID,
      });
    } else {
      await workflowsTable?.updateFlow(draggingFile.id, {
        parentFolderID: parentFolderID,
      });
    }
    await onRefreshFilesList?.();
    setIsDraggingOver(false);
  };

  useEffect(() => {
    setFolderOnTop(
      window.localStorage.getItem(folderOnTopLocalStorageKey) === "true",
    );
  }, [refreshFolderStamp]);

  return (
    <>
      {folderOnTop &&
        folders.map((folder) => (
          <FilesListFolderItem key={folder.id} folder={folder} />
        ))}
      <Box
        border={isDraggingOver ? "2px dashed #718096" : undefined}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDraggingOver(true);
        }}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="droppable"
      >
        {folderOnTop
          ? workflows.map((workflow) => (
              <WorkflowListItem key={workflow.id} workflow={workflow} />
            ))
          : items.map((n) => {
              if (isFolder(n)) {
                return <FilesListFolderItem folder={n} key={n.id} />;
              }
              return <WorkflowListItem key={n.id} workflow={n} />;
            })}
      </Box>
    </>
  );
}
