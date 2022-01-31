import { Material } from './material'

// classe para aulas
export class Lecture {
  // descrição da aula
  readonly description: string
  // url do video da aula
  readonly videoUrl: string
  // lista de materiais extras
  private readonly materials: Array<Material> = []

  constructor (description: string, videoUrl: string) {
    this.description = description
    this.videoUrl = videoUrl
  }

  equals (other: Lecture): boolean {
    return this.description === other.description && this.videoUrl === other.videoUrl
  }

  add (material: Material): void {
    this.materials.push(material)
  }

  includes (material: Material): boolean {
    return this.materials.includes(material)
  }
}
