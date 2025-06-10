from scapy.all import sniff, wrpcap, IP

captured_packets = []
# Simple Packet Sniffer using Scapy
def analyze_packet(packet):
    if IP in packet:
        ip_layer = packet[IP]
        protocol_name = {1: "ICMP", 6: "TCP", 17: "UDP"}.get(ip_layer.proto, f"Other ({ip_layer.proto})")

        print(f"\n Packet Captured:")
        print(f"🔹 From: {ip_layer.src} --> To: {ip_layer.dst} | Protocol: {protocol_name} | Size: {len(packet)} bytes")

        captured_packets.append(packet)

        # Check if we have captured 100 packets
        if len(captured_packets) >= 100:
            print("\n Captured 100 packets. Saving to file...")
            wrpcap("captured_packets.pcap", captured_packets)
            print(" Saved as 'captured_packets.pcap' in current folder.")
            exit()

print("Sniffing... Will auto-save after 100 packets.")
sniff(prn=analyze_packet, store=False)
