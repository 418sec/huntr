# Overview
Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. Parsing of large JSON numbers that are bound on doubles or floats and have 1000000 decimal digits can took more than 14 seconds on modern CPUs. Numerical (BigDecimal, Double, Float, BigInt, Long, Int, etc.) fields , collections or arrays are potentially vulnerable to this attack.
