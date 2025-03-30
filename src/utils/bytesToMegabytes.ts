const BYTES_IN_MEGABYTE = 1024

export const bytesToMegabytes = (bytes: number): number => {
	const megabytes = bytes / (BYTES_IN_MEGABYTE * BYTES_IN_MEGABYTE)
	const megabyteFixed = parseFloat(megabytes.toFixed(1))
	return megabyteFixed
}
