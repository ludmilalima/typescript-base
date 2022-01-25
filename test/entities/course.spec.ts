import { Course, Module, Lecture } from '../../src/entities'

// descrever os componentes de um curso como módulos
describe('Course', () => {
  // cursos podem ser subdivididos em módulos
  it('should be able to add modules to courses', () => {
    // dado tal curso
    const course = new Course('azure-devops',
      'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
    // dado tal módulo
    const module = new Module('Fundamentals')
    // dada tal aula
    const lecture: Lecture = new Lecture('Branching', 'http://youtube.com/1234')
    // tal modulo contem tal aula
    module.add(lecture)
    // tal curso contem tal modulo
    course.add(module)
    // verificação do vinculo do curso com o modulo
    expect(course.includes(module)).toBeTruthy()
  })
})
