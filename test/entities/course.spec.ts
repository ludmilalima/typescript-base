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

  it('should not be able to add modules with same name', () => {
    const course = new Course('azure-devops',
      'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
    const module1 = new Module('Fundamentals')
    const lecture: Lecture = new Lecture('Branching', 'https://youtube.com/1234')

    const module2 = new Module('Fundamentals')

    module1.add(lecture)
    course.add(module1)
    course.add(module2)
    expect(course.includes(module1)).toBeTruthy()
    expect(course.includes(module2)).toBeFalsy()
    expect(course.numberOfModules).toEqual(1)
  })

  it('should be able to rearrange the order of modules', () => {
    const course = new Course('azure-devops', 'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
    const fundamentalsModule = new Module('Fundamentals')
    const branchingLecture: Lecture = new Lecture('Branching', 'https://youtube.com/1234')
    fundamentalsModule.add(branchingLecture)

    const courseOverviewModule = new Module('Course Overview')
    const courseOverviewLecture = new Lecture('Course Overview', 'https://youtube.com/3456')
    courseOverviewModule.add(courseOverviewLecture)

    const gitModule = new Module('Source Control with Git on Azure DevOps')
    const introductionLecture = new Lecture('Introduction', 'https://youtube.com/6789')
    gitModule.add(introductionLecture)

    course.add(fundamentalsModule)
    course.add(courseOverviewModule)
    course.add(gitModule)

    course.move(courseOverviewModule, 1)

    expect(course.position(courseOverviewModule)).toBe(1)
    expect(course.position(fundamentalsModule)).toBe(2)
    expect(course.position(gitModule)).toBe(3)
  })
})
