export async function requestInput(): Promise<string> 
{
  process.stdin.setEncoding('utf8');

  return new Promise((resolve) => 
  {
    const onData = (input: string) => 
    {
      process.stdin.pause();
      process.stdin.removeListener('data', onData);

      resolve(input.trim());
    };

    process.stdin.resume();
    process.stdin.on('data', onData);
  });
}
