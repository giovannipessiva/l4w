const enum DialogInputTypeEnum {
    TEXT,
    INTEGER
}

// Dialog node core model (only persistent data)
interface IDialogNodeData {
    id: number; // ID of the dialog node
    message?: string; // String displayed for this dialog
    genericMessage?: number; // ID of the generic string displayed for this dialog
    edgeIds?: number[]; // Array of ID of edges which start from this node
}

// Dialog edge core model (only persistent data)
interface IDialogEdgeData {
    id: number; // ID of the dialog edge
    message?: string; // String displayed for this edge
    inputType?: DialogInputTypeEnum; // Type of input required for this edge
    condition: string; // Name of function that returns true if this edge can be active (see Conditions.ts)
    script?: string; // Script Class which contains the method used by this edge
    action?: string; // Method of the script that will be invoked for this edge
    nodeId?: number; // ID of the node pointed by this edge
}

// Dialog node extended model (include transient data)
interface IDialogNode extends IDialogNodeData {
    edges?: IDialogEdge[];  // Array of edges which start from this node
}

// Dialog edge extended model (include transient data)
interface IDialogEdge extends IDialogEdgeData {
    node?: IDialogNode; // Node pointed by this edge
}

interface IGenericMessageValue {
    stringId: number;
    condition?: string;
}

interface IGenericMessage {
    id: number;
    values: IGenericMessageValue[];
}