import 'package:final_touch/features/auth/data/user_model.dart';
import 'package:final_touch/features/booking/data/barber_model.dart';
import 'package:final_touch/features/booking/data/service_model.dart';
import 'package:final_touch/features/booking/data/appointment_model.dart';

class MockDatabase {
  static final UserModel currentUser = UserModel(
    id: 'user_1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    phone: '+91 9876543210',
    role: UserRole.customer,
    profileImage: 'https://i.pravatar.cc/300?img=11',
  );

  static final List<ServiceModel> services = [
    ServiceModel(
      id: 's1',
      name: 'Classic Haircut',
      description: 'Standard scissors cut with wash & style.',
      price: 250,
      durationMinutes: 30,
      imageUrl: 'https://images.unsplash.com/photo-1593702295094-aea8c5c13d73?auto=format&fit=crop&w=300&q=80',
      category: 'Hair',
    ),
    ServiceModel(
      id: 's2',
      name: 'Beard Trim & Shape',
      description: 'Hot towel and straight razor line up.',
      price: 150,
      durationMinutes: 20,
      imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=300&q=80',
      category: 'Beard',
    ),
    ServiceModel(
      id: 's3',
      name: 'Royal Shave',
      description: 'Traditional straight razor shave.',
      price: 400,
      durationMinutes: 45,
      imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b7f30a?auto=format&fit=crop&w=300&q=80',
      category: 'Beard',
    ),
    ServiceModel(
      id: 's4',
      name: 'Gold Facial',
      description: 'Deep cleansing and rejuvenation.',
      price: 800,
      durationMinutes: 60,
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80',
      category: 'Facial',
    ),
  ];

  static final List<BarberModel> barbers = [
    BarberModel(
      id: 'b1',
      name: 'David Ross',
      specialization: 'Master Barber',
      bio: 'Expert in modern fades and classic cuts.',
      rating: 4.9,
      reviewCount: 120,
      imageUrl: 'https://i.pravatar.cc/300?img=33',
      isAvailable: true,
    ),
    BarberModel(
      id: 'b2',
      name: 'Sarah Jenkins',
      specialization: 'Color Specialist',
      bio: 'Creative colorist and stylist.',
      rating: 4.8,
      reviewCount: 85,
      imageUrl: 'https://i.pravatar.cc/300?img=5',
      isAvailable: true,
    ),
    BarberModel(
      id: 'b3',
      name: 'Marcus Chen',
      specialization: 'Precision Stylist',
      bio: 'Known for sharp lines and detailed work.',
      rating: 5.0,
      reviewCount: 42,
      imageUrl: 'https://i.pravatar.cc/300?img=12',
      isAvailable: true,
    ),
  ];

  static final List<AppointmentModel> appointments = [
    AppointmentModel(
      id: 'a1',
      customerId: 'user_1',
      customerName: 'Alex Johnson',
      barber: barbers[0],
      service: services[0],
      dateTime: DateTime.now().add(const Duration(days: 1, hours: 2)),
      status: AppointmentStatus.confirmed,
    ),
    AppointmentModel(
      id: 'a2',
      customerId: 'user_1',
      customerName: 'Alex Johnson',
      barber: barbers[1],
      service: services[3],
      dateTime: DateTime.now().subtract(const Duration(days: 5)),
      status: AppointmentStatus.completed,
    ),
  ];
}
