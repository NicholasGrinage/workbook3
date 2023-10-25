function parseAndDisplayName(name) {
  let positionFirstSpace = name.indexOf(" ");

  let first = name.substring(0, positionFirstSpace);
  let positionOfLastNameStart = positionFirstSpace + 1;

  let last = name.substring(positionOfLastNameStart);

  console.log(`
    Name: ${name}
    First name: ${first}
    Last name: ${last}
`);
}
parseAndDisplayName("Chrisjan Mathews");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
