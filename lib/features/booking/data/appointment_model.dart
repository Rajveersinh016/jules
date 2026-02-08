import 'package:final_touch/features/booking/data/barber_model.dart';
import 'package:final_touch/features/booking/data/service_model.dart';

enum AppointmentStatus { pending, confirmed, completed, cancelled }

class AppointmentModel {
  final String id;
  final String customerId;
  final String customerName;
  final BarberModel barber;
  final ServiceModel service;
  final DateTime dateTime;
  final AppointmentStatus status;

  AppointmentModel({
    required this.id,
    required this.customerId,
    required this.customerName,
    required this.barber,
    required this.service,
    required this.dateTime,
    required this.status,
  });
}
