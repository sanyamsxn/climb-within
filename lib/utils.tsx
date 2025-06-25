// export function cn(...inputs: any[]) {
//   return inputs
//     .flatMap(input => {
//       if (typeof input === "string") return input;
//       if (typeof input === "object" && input !== null) {
//         return Object.entries(input)
//           .filter(([_, value]) => Boolean(value))
//           .map(([key]) => key);
//       }
//       return [];
//     })
//     .join(" ");
// }


export function cn(...inputs: Array<string | Record<string, boolean> | undefined | null | false>) {
  return inputs
    .flatMap(input => {
      if (typeof input === "string") return input;
      if (typeof input === "object" && input !== null) {
        return Object.entries(input)
          .filter(([ value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}