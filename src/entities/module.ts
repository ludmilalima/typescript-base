import { Lecture } from './lecture'
// classe para um módulo de curso
export class Module {
  // um modulo pode conter varias aulas
  private readonly lectures: Array<Lecture> = []
  // um nome
  private name: string
  // o nome do modulo é obrigatorio na construção
  constructor (name: string) {
    this.name = name
  }

  // metodo para adição de aulas em modulos
  add (lecture: Lecture): void {
    this.lectures.push(lecture)
  }

  // verificar se contem uma aula
  includes (lecture: Lecture): boolean {
    return this.lectures.includes(lecture)
  }
}
