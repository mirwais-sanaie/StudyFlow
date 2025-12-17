function TaskForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      {/* Task Form Content */}
      <DialogTitle></DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
}

export default TaskForm;
