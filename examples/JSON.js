var JsonData = '{"person":[{"name":"john","city":"NYC"},{"name":"phoebie","city":"London"}]}';

var parse = JSON.parse(JsonData);

console.log(parse.person[0]);