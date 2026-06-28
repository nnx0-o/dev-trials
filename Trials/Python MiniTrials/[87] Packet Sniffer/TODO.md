# TODO: Packet Sniffer

Write a Python script implementing a basic network packet sniffer.

## Requirements
- Use raw sockets (`socket.AF_PACKET` on Linux or `socket.IPPROTO_IP` with promiscuous mode)
- Parse Ethernet frames: destination MAC, source MAC, EtherType
- Parse IPv4 headers: source IP, destination IP, TTL, protocol
- Parse TCP headers: source port, destination port, flags (SYN, ACK, FIN, RST)
- Parse UDP headers: source port, destination port, length
- Parse ICMP headers: type, code
- Display each captured packet in a structured format with timestamp
- Filter by protocol (`--proto tcp/udp/icmp`) or IP (`--ip <address>`)
- Count packets per protocol and display a running summary every 10 packets
- Require root/admin privileges and print a clear error if not available
