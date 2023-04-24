export async function getBlock(bloque) {
    const response = await fetch(
      `http://localhost:3333/node/bloque/${bloque}`
    );
    const data = await response.json();
    return data;
  }

  export async function getTx(tx) {
    const response = await fetch(
      `http://localhost:3333/node/tx/${tx}`
    );
    const data = await response.json();
    return data;
  }
  export async function getBalance(address) {
    const response = await fetch(
      `http://localhost:3333/balance/address/${address}`
    );
    const data = await response.json();
    return data;
  }

  export async function getLastBlock() {
    const response = await fetch(
      `http://localhost:3333/node/bloque`
    );
    const data = await response.json();
    return data;
  }

  export async function getListNodesByNetworkId(numero) {
    const numeroRed = numero.substring(3);
    const response = await fetch(
      `http://localhost:3333/network/procesos/${numeroRed}`
    );
    const data = await response.json();
    return datos;
  };

  