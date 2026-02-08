import 'package:final_touch/core/data/mock_database.dart';
import 'package:final_touch/features/booking/data/appointment_model.dart';
import 'package:final_touch/features/booking/data/barber_model.dart';
import 'package:final_touch/features/booking/data/service_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

abstract class BookingRepository {
  Future<List<ServiceModel>> getServices();
  Future<List<BarberModel>> getBarbers();
  Future<List<AppointmentModel>> getAppointments();
  Future<void> createAppointment(AppointmentModel appointment);
}

class MockBookingRepository implements BookingRepository {
  @override
  Future<List<ServiceModel>> getServices() async {
    await Future.delayed(const Duration(milliseconds: 500));
    return MockDatabase.services;
  }

  @override
  Future<List<BarberModel>> getBarbers() async {
    await Future.delayed(const Duration(milliseconds: 500));
    return MockDatabase.barbers;
  }

  @override
  Future<List<AppointmentModel>> getAppointments() async {
    await Future.delayed(const Duration(milliseconds: 500));
    return MockDatabase.appointments;
  }

  @override
  Future<void> createAppointment(AppointmentModel appointment) async {
    await Future.delayed(const Duration(seconds: 1));
    MockDatabase.appointments.add(appointment);
  }
}

final bookingRepositoryProvider = Provider<BookingRepository>((ref) {
  return MockBookingRepository();
});
