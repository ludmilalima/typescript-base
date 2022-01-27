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

  get numberOfLectures (): number {
    return this.lectures.length
  }

  // metodo para adição de aulas em modulos
  add (lecture: Lecture): void {
    if (!this.includesLectureWithSameName(lecture)) {
      this.lectures.push(lecture)
    }
  }

  private includesLectureWithSameName (lecture: Lecture): boolean {
    return this.lectures.find(lec => lec.description === lecture.description) !== undefined
  }

  // verificar se contem uma aula
  includes (lecture: Lecture): boolean {
    return this.lectures.find(lec => lec.equals(lecture)) !== undefined
  }

  move (lecture: Lecture, to: number): void {
    if (to > this.lectures.length || to <= 0) {
      return
    }
    const from = this.position(lecture)
    this.lectures.splice(to - 1, 0, this.lectures.splice(from - 1, 1)[0])
  }

  position (lecture: Lecture): number {
    const lectureInModule = this.lectures.find(lec => lec.equals(lecture))
    if (lectureInModule === undefined) {
      return undefined
    }
    return this.lectures.indexOf(lectureInModule) + 1
  }
}
