class ServiceModel {
  final String id;
  final String name;
  final String description;
  final double price;
  final int durationMinutes;
  final String imageUrl;
  final String category; // 'Hair', 'Beard', 'Facial', 'Spa'

  ServiceModel({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.durationMinutes,
    required this.imageUrl,
    required this.category,
  });
}
