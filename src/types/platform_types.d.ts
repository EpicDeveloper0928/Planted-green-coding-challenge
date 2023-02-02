declare interface ICustomerLocation {
  name: string;
  latitude: number;
  longitude: number;
}

declare interface IPlantationProject {
  id: number;
  type: string;
  projectName: string;
  status: string;
  forestOwnership: string;
  forestOwner: string;
  treeQuantity: number;
  location: string;
  coordinatesUrl: string;
  latitude: string;
  longitude: string;
  startId: number;
  endId: number;
  startDate: string;
  comment: string | null;
  area: string | null;
}
