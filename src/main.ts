#!/usr/bin/env node

// src/main.ts
import { CommandFactory } from 'nest-commander';
import { CommandAppModule } from './command/command.module';

async function bootstrap() {
  try {
    await CommandFactory.run(CommandAppModule, ['warn', 'error']);
  } catch (error) {
    console.error('Error during command execution:', error);
  }
}

bootstrap();
