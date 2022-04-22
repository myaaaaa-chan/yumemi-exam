export interface PopulationComposition {
  prefName: string;
  boundaryYear: number;
  data: [
    {
      label: string;
      data: [{
        year: number;
        value: number;
        rate?: number;
      }]
    }
  ]
}
