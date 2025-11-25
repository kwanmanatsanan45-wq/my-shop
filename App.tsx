import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const products =[
  {
  id: 1,
  name: `คอปเตอร์ไม้ไผ่`,
  price: 20,
},
{
  id: 2,
  name: `ผ้าคลุมล่องหน`,
  price: 10,
},
{
  id: 3,
  name: `ประตูไปที่ไหนก็ได้`,
  price: 200,
},
{
  id: 4,
  name: `ปุ่มเผด็จการ`,
  price: 50,
},
{
  id: 5,
  name: `ผ้าคลุมกาลเวลา`,
  price: 550,
},
{
  id: 6,
  name: `ไฟฉายย่อส่วน`,
  price: 202,
},
{
  id: 7,
  name: `วุ้นแปลภาษา`,
  price: 2009,
},
{
  id: 8,
  name: `ตู้โทรศัพท์สมมติ`,
  price: 900,
},
{
  id: 9,
  name: `กล้องถ่ายรูปสลับร่าง`,
  price: 560,
},
{
  id: 10,
  name: `ขนมปังช่วยจำ`,
  price: 270,
},
{
  id: 11,
  name: `ปืนดูดแรงโน้มถ่วง`,
  price: 920,
},
{
  id: 12,
  name: `เครื่องวาดภาพเสมือนจริง`,
  price: 9070,
},
{
  id: 13,
  name: `พรมวิเศษ`,
  price: 400,
},
{
  id: 14,
  name: `ยาปลุกใจเสือ`,
  price: 2088,
},
{
  id: 15,
  name: `เครื่องมือสร้างโลกจำลอง`,
  price: 800,
},
{
  id: 16,
  name: `นาฬิกาหยุดเวลา`,
  price: 700,
},
{
  id: 17,
  name: `กล่องเพิ่มความสูง`,
  price: 520,
},
{
  id: 18,
  name: `เครื่องย้อนเวลา`,
  price: 950,
},
{
  id: 19,
  name: `กล้องเปลี่ยนขุด`,
  price: 270,
},
{
  id: 20,
  name: `ห่วงผ่านตลอด`,
  price: 230,
},
]

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>🔮ร้านขายของวิเศษ จากโลกอนาคต🔮</Text>
    </View>
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((t) => (
        <View key={t.id} style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{t.id}</Text>
          </View>

          <Text style={styles.name}>{t.name}</Text>
          <Text style={styles.role}>ราคา {t.price} บาท</Text>

          <View style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor : "#421e96ff",
  },

   header: {
    backgroundColor: "#8e44ad",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },

  topic: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    color: "#ffffffff",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    width: "100%",
    maxWidth: 380,
    marginBottom: 20,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#ffffffff",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1d1d1f",
    marginBottom: 4,
  },

  role: {
    fontSize: 16,
    color: "#86868b",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 10,
  },

  buttonText: {
    color: "#ffffffff",
    fontSize: 16,
    fontWeight: "600",
  },
}
);