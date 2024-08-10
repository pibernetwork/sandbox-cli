// src/command/command.module.ts
import { Module } from '@nestjs/common';

import { BasicCommand } from './basic.module';
import { GreetCommand } from './greet.command';
import { HelloCommand } from './hello.command';
import { NumberCommand } from './number.command';

@Module({
  providers: [HelloCommand, GreetCommand, BasicCommand, NumberCommand],
})
export class CommandAppModule {}
