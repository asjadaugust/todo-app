from fastapi import FastAPI

app = FastAPI(
    title="Todo App",
    description="Tool to track tasks before the due date.",
    docs_url="/api/docs")


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/tasks")
def get_tasks():
    return {"something": "lese"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
