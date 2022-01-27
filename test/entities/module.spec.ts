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

  // não permite mudar ordem das aulas
  it('should be able to rearrange the order of lectures', () => {
    // dado o modulo Fundamentals
    const module = new Module('Fundamentals')
    // dadas as aulas branching, comminting and pushing
    const branching: Lecture = new Lecture('Branching', 'https://youtube.com/branching')
    const commiting: Lecture = new Lecture('Commiting', 'https://youtube.com/commiting')
    const pushing: Lecture = new Lecture('Pushing', 'https://youtube.com/pushing')

    // adicionar as aulas ordenadamente
    module.add(branching)
    module.add(commiting)
    module.add(pushing)

    // tentar reordenar
    module.move(branching, 3)

    // confirmação do bloqueio da reordenação
    expect(module.position(commiting)).toBe(1)
    expect(module.position(pushing)).toBe(2)
    expect(module.position(branching)).toBe(3)
  })
})

it('should handle unexisting lecture', () => {
  const module = new Module('Fundamentals')
  const branching: Lecture = new Lecture('Branching', 'https://youtube.com/branching')

  expect(module.position(branching)).toBeUndefined()
})
