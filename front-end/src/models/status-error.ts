class StatusError extends Error {
  status: number;
  isNotFound: boolean;
  internalMessage?: string;

  constructor(status: number, internalMessage?: string) {
    super(internalMessage);
    this.status = status;
    this.isNotFound = status === 404;
    this.internalMessage = internalMessage;
  }
}
export default StatusError;
