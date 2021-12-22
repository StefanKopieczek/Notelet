const world = 'world';

export function hello(target: string = world): string {
  return `Hello ${target}! `;
}

console.log(hello());
