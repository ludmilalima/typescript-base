import { Lecture } from '.'
import { Module } from './module'
import { moveInArray } from './util'

// criar classe curso
export class Course {
    // curso pode conter varios modulos
    private modules: Array<Module> = []
    // uma referencia
    public reference: string
    // uma descricao
    public description: string

    // a criação de um curso requer uma referencia e uma descricao
    constructor (reference: string, description: string) {
      this.reference = reference
      this.description = description
    }

    get numberOfModules (): number {
      return this.modules.length
    }

    // modulos podem ser adicionados
    add (module: Module): void {
      if (!this.includesModuleWithSameName(module)) this.modules.push(module)
    }

    private includesModuleWithSameName (module: Module): boolean {
      return this.modules.find(mod => mod.name === module.name) !== undefined
    }

    // verificar se contem um modulo
    includes (module: Module): boolean {
      return this.modules.includes(module)
    }

    move (module: Module, to: number): void {
      if (to > this.modules.length || to < 1) return
      const from = this.position(module)
      moveInArray(this.modules, from - 1, to - 1)
    }

    position (module: Module): number {
      const moduleInCourse = this.modules.find(mod => mod.name === module.name)
      if (moduleInCourse === undefined) {
        return undefined
      }
      return this.modules.indexOf(moduleInCourse) + 1
    }

    moveLecture (lecture: Lecture, fromModule: Module, toModule: Module, position: number): void {
      fromModule.remove(lecture)
      toModule.add(lecture)
      const currentLecturePosition = toModule.position(lecture)
      if (currentLecturePosition !== position) toModule.move(lecture, position)
    }
}
