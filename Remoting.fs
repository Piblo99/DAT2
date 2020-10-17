namespace DAT2

open WebSharper

module Server =

    [<Rpc>]
    let Evaluate input =
        let R (s: string) = System.String(s.ToCharArray())
        async {
            return R input
        }
