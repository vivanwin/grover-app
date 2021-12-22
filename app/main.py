from typing import Optional

from fastapi import FastAPI

import qsharp

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


@app.get("/grover/{num_qubits}/{bitstring}/{simulator}")
def grover_circuit(num_qubits: int, bitstring: str, simulator: str):
    return {"num_qubits": num_qubits, "bitstring": bitstring, "simulator": simulator}
