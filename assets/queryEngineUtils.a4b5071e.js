import{lJ as r}from"./vendor.508dc62e.js";import{r as n}from"./VertexSnappingCandidate.603a10c5.js";function a(e,t,o){switch(e.type){case"edge":return new r({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:o});case"vertex":return new n({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:o})}}export{a as o};