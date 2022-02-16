import { Either, left, right } from '../shared/either'
import { ExistingElementError } from './errors/existing-element-error'
import { UnexistingElementError } from './errors/unexisting-element-error'
import { Element } from './part'

export class Container<T extends Element> {
  private readonly elements: Array<T> = []

  get numberOfElements (): number {
    return this.elements.length
  }

  add (element: T): Either<ExistingElementError, void> {
    if (!this.includes(element)) {
      return right(this.push(element))
    }
    return left(new ExistingElementError())
  }

  private push (element: T): void {
    this.elements.push(element)
  }

  includes (element: T): boolean {
    return this.elements.find(p => p.equals(element) === true) !== undefined
  }

  move (element: T, to: number): void {
    if (to > this.elements.length || to < 1) return
    const from = this.position(element)
    moveInArray(this.elements, from - 1, to - 1)
  }

  position (element: T): number {
    const elementInContainer = this.elements.find(p => p.equals(element))
    if (elementInContainer === undefined) {
      return undefined
    }
    return this.elements.indexOf(elementInContainer) + 1
  }

  remove (element: T): Either<UnexistingElementError, void> {
    if (!this.includes(element)) return left(new UnexistingElementError())
    const positionInArray = this.position(element) - 1
    return right(this.splice(positionInArray, 1))
  }

  private splice (position: number, numberOfElements: number): void {
    this.elements.splice(position, numberOfElements)
  }
}

function moveInArray<T> (array: Array<T>, from: number, to: number): void {
  const element = array.splice(from, 1)[0]
  array.splice(to, 0, element)
}
