import { Module } from './module'
// criar classe curso
export class Course {
    // curso pode conter varios modulos
    public modules: Array<Module> = []
    // uma referencia
    public reference: string
    // uma descricao
    public description: string

    // a criação de um curso requer uma referencia e uma descricao
    constructor (reference: string, description: string) {
      this.reference = reference
      this.description = description
    }

    // modulos podem ser adicionados
    add (module: Module): void {
      this.modules.push(module)
    }

    // verificar se contem um modulo
    includes (module: Module): boolean {
      return this.modules.includes(module)
    }
}
