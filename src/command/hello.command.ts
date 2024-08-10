import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'hello',
  description: 'A simple hello command',
})
export class HelloCommand extends CommandRunner {
  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    console.log('Hello, Nest Commander!', passedParams, options);
  }
}
