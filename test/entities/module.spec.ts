import { Module, Lecture } from '../../src/entities'

describe('Module', () => {
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

  // não repetir nome das aulas nos modulos
  it('should not be able to have two lectures with the same name in a module', () => {
    // dado tal modulo
    const module = new Module('Fundamentals')
    // add tal aula
    const lecture: Lecture = new Lecture('Branching', 'http://youtube.com/1234')

    // duplicando a aula para o teste
    const otherLecture: Lecture = new Lecture('Branching', 'http://youtube.com/5678')

    // efetuar tal vinculo
    module.add(lecture)
    // adicionar novamente a mesma aula
    module.add(otherLecture)
    // verificação do vinculo do módulo com uma aula
    expect(module.includes(lecture)).toBeTruthy()
    // verifica duplicidade na inserção
    expect(module.includes(otherLecture)).toBeFalsy()
  })
})
