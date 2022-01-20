import { Course, Module, Lecture } from '../../src/entities'
// descrever os componentes de um curso como módulos
describe('Course', () => {
  // adicionar aulas aos modulos
  it('should be able to add lectures to modules', () => {
    // dado tal modulo
    const module = new Module('Fundamentals')
    // add tal aula
    const lecture: Lecture = {
      // contendo tal descrição
      description: 'Branching'
    }
    // efetuar tal vinculo
    module.add(lecture)
    // um modulo deve ter ao menos ma aula
    expect(module.lectures.length).toBe(1)
    // verificação do vinculo do módulo com uma aula
    expect(module.lectures.includes(lecture)).toBeTruthy()
  })
  // cursos podem ser subdivididos em módulos
  it('should be able to add modules to courses', () => {
    // dado tal curso
    const course = new Course('azure-devops',
      'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
    // dado tal módulo
    const module = new Module('Fundamentals')
    // dada tal aula
    const lecture: Lecture = {
      description: 'Branching'
    }
    // tal modulo contem tal aula
    module.add(lecture)
    // tal curso contem tal modulo
    course.add(module)
    // um curso deve conter ao menos um modulo
    expect(course.modules.length).toBe(1)
    // verificação do vinculo do curso com o modulo
    expect(course.modules.includes(module)).toBeTruthy()
  })
})
