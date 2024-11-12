import { requestInput } from "./input";

async function main()
{
	process.stdout.write("input: ");
	
	const input = await requestInput();

	console.log(`got ${input}`);

	const input2 = await requestInput();

	console.log(`got2 ${input2}`);
}

main();
