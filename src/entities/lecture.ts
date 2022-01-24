// classe para aulas
export class Lecture {
    // descrição da aula
    readonly description: string
    // url do video da aula
    readonly videoUrl: string
    // descricao é obrigatoria

    constructor (description: string, videoUrl: string) {
      this.description = description
      this.videoUrl = videoUrl
    }

    equals (other: Lecture): boolean {
      return this.description === other.description && this.videoUrl === other.videoUrl
    }
}
