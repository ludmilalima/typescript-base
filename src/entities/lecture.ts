// classe para aulas
export class Lecture {
    // descrição da aula
    readonly description: string
    // descricao é obrigatoria
    constructor (description: string) {
      this.description = description
    }
}
