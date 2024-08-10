import { Command, CommandRunner, Option } from 'nest-commander';

@Command({ name: 'number', description: 'a hello command' })
export class NumberCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(
    passedParams: string[],
    options?: { number?: number },
  ): Promise<void> {
    const number = options?.number;
    if (number !== undefined) {
      console.log(`Hello world! You passed the number: ${number}`);
    } else {
      console.log('Hello world!');
    }
  }

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }
}
