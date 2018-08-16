interface IDialogNodeData {
    id: number;
    message?: string;
    edgeIds?: number[];
}

interface IDialogEdgeData {
    id: number;
    message?: string;
    inputType?: string;
    condition? string;
    script?: string;
    action? string;
    nodeId?: number;
}

interface IDialogNode extends IDialogNodeData {
    edges?: IDialogEdge[];
}

interface IDialogEdge extends IDialogEdgeData {
    node?: IDialogNode;
}
