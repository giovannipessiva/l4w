//TODO vedere TMX

interface IMap {
    id: string;
    layers: [IMapLayer];
}

interface IMapLayer {
    cells: [[IMapCell]];
}

interface IMapCell {
    i: number;
    j: number;
    //oltre al tile, salvare anche le coordinate?
}