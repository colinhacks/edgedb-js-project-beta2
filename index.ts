import * as edgedb from 'edgedb';

const main = async function main() {
  const pool = await edgedb.createPool();
  const result = await pool.queryOne(`SELECT 2 + 2;`);
  console.log(result);
};

main();
