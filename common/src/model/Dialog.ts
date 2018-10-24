export const enum DialogInputTypeEnum {
    TEXT,
    INTEGER
}

// Dialog node core model (only persistent data)
export interface IDialogNodeData {
    id: number; // ID of the dialog node
    message?: string; // String displayed for this dialog
    genericMessage?: number; // ID of the generic string displayed for this dialog
    edgeIds?: number[]; // Array of ID of edges which start from this node
    closingTimeout?: number; // Timeout before closing the dialog (milliseconds)
}

// Dialog edge core model (only persistent data)
export interface IDialogEdgeData {
    id: number; // ID of the dialog edge
    message?: string; // String displayed for this edge
    inputType?: DialogInputTypeEnum; // Type of input required for this edge
    condition?: string; // Name of function that returns true if this edge can be active (see Conditions.ts)
    conditionParams?: string; // Value that will be passed as parameter to the condition function
    script?: string; // Script Class which contains the method used by this edge
    action?: string; // Method of the script that will be invoked for this edge
    nodeId?: number; // ID of the node pointed by this edge
}

// Dialog node extended model (include transient data)
export interface IDialogNode extends IDialogNodeData {
    edges?: IDialogEdge[];  // Array of edges which start from this node
}

// Dialog edge extended model (include transient data)
export interface IDialogEdge extends IDialogEdgeData {
    node?: IDialogNode; // Node pointed by this edge
}

// Single value that could be used for a generic message
export interface IGenericMessageValue {
    message: string; // String of the message
    conditionParams: string; // Parameters to be used for evaluating the condition
}

// A message that can be resolved to different strings, based on some conditions
export interface IGenericMessage {
    id: number; // ID of the generic string
    description: string; // Description of the generic string
    condition?: string; // Name of function that returns true if this state can be active (see Conditions.ts)
    values: IGenericMessageValue[]; // Array of possible values for this generic message
}