type RemoteResourceStatus = "idle" | "loading" | "success" | "error";

class RemoteResource<T> {
  data: T | undefined;
  error: Error | undefined;
  status: RemoteResourceStatus;

  constructor(data?: T, error?: Error, status?: RemoteResourceStatus) {
    this.data = data;
    this.error = error;
    this.status = status || "idle";
  }
}
export default RemoteResource;
