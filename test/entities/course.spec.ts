import { Course, Module, Lecture } from '../../src/entities'

// descrever os componentes de um curso como módulos
describe('Course', () => {
  // adicionar aulas aos modulos
  it('should be able to add lectures to modules', () => {
    // dado tal modulo
    const module = new Module('Fundamentals')
    // add tal aula
    const lecture: Lecture = new Lecture('Branching', 'http://youtube.com/1234')
    // efetuar tal vinculo
    module.add(lecture)
    // verificação do vinculo do módulo com uma aula
    expect(module.includes(lecture)).toBeTruthy()
  })

  // não repetir aulas nos modulos
  it('should not be able to add the same lectures twice in a module', () => {
    // dado tal modulo
    const module = new Module('Fundamentals')
    // add tal aula
    const lecture: Lecture = new Lecture('Branching', 'http://youtube.com/1234')

    // duplicando a aula para o teste
    const sameLecture: Lecture = new Lecture('Branching', 'http://youtube.com/1234')

    // efetuar tal vinculo
    module.add(lecture)
    // adicionar novamente a mesma aula
    module.add(sameLecture)
    // verificação do vinculo do módulo com uma aula
    expect(module.includes(lecture)).toBeTruthy()
    // verifica duplicidade na inserção
    expect(module.numberOfLectures).toBe(1)
  })

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
