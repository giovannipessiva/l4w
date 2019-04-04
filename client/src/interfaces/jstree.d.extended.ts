interface JSTreeNode {
    id: string;
    text: string;
    icon: boolean;
    li_attr: any; //{"id":"1"}
    a_attr: any; //{"href":"#","id":"1_anchor"}
    state: JSTreeNodeState;
    data: JSTreeNodeData;
    parent: string;
};

interface JSTreeNodeState {
    loaded: boolean;
    opened: boolean;
    selected: boolean;
    disabled: boolean;
};

interface JSTreeNodeData {
    // No additional data
};