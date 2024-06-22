export interface CardModel{
  id: number;
  nombre: string;
  usuarios?: string[];
  prioridad: string;
  descripcion?: string;
  inicial?: boolean;
}
