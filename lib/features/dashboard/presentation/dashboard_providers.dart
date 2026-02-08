import 'package:final_touch/core/data/repositories/booking_repository.dart';
import 'package:final_touch/features/booking/data/appointment_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final appointmentsProvider = FutureProvider<List<AppointmentModel>>((ref) {
  return ref.read(bookingRepositoryProvider).getAppointments();
});
