/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}

  async listAllUser() {
    return this.userRepository.find({
      relations: ['roles', 'roles.permissions'], 
    });
  }

   // Consultar el historial de pagos del usuario
   async getPaymentHistory(userId: string): Promise<string> {
    return `Fetching payment history for user with ID: ${userId}`;
  }

  // Actualizar información de contacto del usuario
  async updateContactInfo(userId: string, contactDto: any): Promise<string> {
    return `Updating contact information for user with ID: ${userId}`;
  }

  // Consultar contratos activos del usuario
  async getActiveContracts(userId: string): Promise<string> {
    return `Fetching active contracts for user with ID: ${userId}`;
  }

  // Consultar propiedades visitadas por el usuario
  async getVisitedProperties(userId: string): Promise<string> {
    return `Fetching visited properties for user with ID: ${userId}`;
  }

  // Calificar una propiedad después de una visita
  async rateProperty(userId: string, propertyId: string, rating: number): Promise<string> {
    return `Submitting rating for property with ID: ${propertyId} by user with ID: ${userId}`;
  }

  // Descargar documentos asociados al usuario (contratos, recibos)
  async downloadDocuments(userId: string): Promise<string> {
    return `Downloading documents for user with ID: ${userId}`;
  }

  // Solicitar una copia de los datos personales (para GDPR/leyes de privacidad)
  async requestPersonalDataCopy(userId: string): Promise<string> {
    return `Requesting personal data copy for user with ID: ${userId}`;
  }

  // Verificar el estado de una solicitud de arrendamiento
  async checkRentalRequestStatus(userId: string, requestId: string): Promise<string> {
    return `Checking rental request status for user with ID: ${userId} and request ID: ${requestId}`;
  }

  // Actualizar la dirección del usuario
  async updateAddress(userId: string, addressDto: any): Promise<string> {
    return `Updating address for user with ID: ${userId}`;
  }

  // Consultar notificaciones pendientes del usuario
  async getPendingNotifications(userId: string): Promise<string> {
    return `Fetching pending notifications for user with ID: ${userId}`;
  }

  // Registrar interés en una propiedad
  async expressInterestInProperty(userId: string, propertyId: string): Promise<string> {
    return `Expressing interest in property with ID: ${propertyId} for user with ID: ${userId}`;
  }

  // Obtener recomendaciones de propiedades basadas en preferencias
  async getRecommendedProperties(userId: string): Promise<string> {
    return `Fetching recommended properties for user with ID: ${userId}`;
  }

  // Cambiar el idioma preferido del usuario
  async updatePreferredLanguage(userId: string, language: string): Promise<string> {
    return `Updating preferred language to ${language} for user with ID: ${userId}`;
  }

  // Establecer recordatorios para pagos de renta
  async setRentPaymentReminders(userId: string, reminderDate: Date): Promise<string> {
    return `Setting rent payment reminder for user with ID: ${userId} on ${reminderDate}`;
  }

  // Solicitar una extensión de contrato de arrendamiento
  async requestLeaseExtension(userId: string, contractId: string): Promise<string> {
    return `Requesting lease extension for contract with ID: ${contractId} by user with ID: ${userId}`;
  }

  // Bloquear a un usuario en caso de abuso (por ejemplo, en comentarios o interacciones)
  async blockUser(userId: string, blockedUserId: string): Promise<string> {
    return `Blocking user with ID: ${blockedUserId} by user with ID: ${userId}`;
  }

  // Obtener historial de calificaciones de un usuario
  async getUserRatings(userId: string): Promise<string> {
    return `Fetching user ratings for user with ID: ${userId}`;
  }

  // Registrar un incidente con una propiedad (por ejemplo, problemas técnicos)
  async reportPropertyIssue(userId: string, issueDto: any): Promise<string> {
    return `Reporting property issue for user with ID: ${userId}`;
  }

  // Solicitar soporte técnico para la plataforma
  async requestPlatformSupport(userId: string, supportRequestDto: any): Promise<string> {
    return `Requesting platform support for user with ID: ${userId}`;
  }

  // Consultar el estado de verificación del usuario (KYC)
  async getVerificationStatus(userId: string): Promise<string> {
    return `Fetching verification status for user with ID: ${userId}`;
  }
  // Actualizar el perfil del usuario conectado
  async updateProfile(userId: string, updateUserDto: any): Promise<string> {
    return `Updating profile for user with ID: ${userId}`;
  }

  // Cambiar la contraseña del usuario conectado
  async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<string> {
    return `Changing password for user with ID: ${userId}`;
  }

  // Actualizar la foto de perfil del usuario
  async updateProfilePicture(userId: string): Promise<string> {
    return `Updating profile picture for user with ID: ${userId}`;
  }

  // Obtener la información del usuario conectado
  async getCurrentUser(userId: string): Promise<string> {
    return `Fetching current user data for user with ID: ${userId}`;
  }

  // Desactivar la cuenta del usuario
  async deactivateAccount(userId: string): Promise<string> {
    return `Deactivating account for user with ID: ${userId}`;
  }

  // Actualizar las preferencias del usuario
  async updatePreferences(userId: string, preferencesDto: any): Promise<string> {
    return `Updating preferences for user with ID: ${userId}`;
  }

  // Obtener el historial de actividad del usuario
  async getActivityLog(userId: string): Promise<string> {
    return `Fetching activity log for user with ID: ${userId}`;
  }

  // Solicitar la eliminación de la cuenta
  async requestAccountDeletion(userId: string): Promise<string> {
    return `Requesting account deletion for user with ID: ${userId}`;
  }

  // Actualizar el método de pago preferido
  async updatePreferredPaymentMethod(userId: string, paymentMethod: string): Promise<string> {
    return `Updating preferred payment method for user with ID: ${userId}`;
  }

  // Recuperar configuraciones de notificaciones del usuario
  async getNotificationSettings(userId: string): Promise<string> {
    return `Fetching notification settings for user with ID: ${userId}`;
  }

  // Actualizar configuraciones de notificaciones del usuario
  async updateNotificationSettings(userId: string, settingsDto: any): Promise<string> {
    return `Updating notification settings for user with ID: ${userId}`;
  }

  // Enviar un mensaje al soporte técnico
  async sendMessageToSupport(userId: string, messageDto: any): Promise<string> {
    return `Sending message to support for user with ID: ${userId}`;
  }

  // Obtener la lista de propiedades favoritas del usuario
  async getFavoriteProperties(userId: string): Promise<string> {
    return `Fetching favorite properties for user with ID: ${userId}`;
  }

  // Agregar una propiedad a favoritos
  async addPropertyToFavorites(userId: string, propertyId: string): Promise<string> {
    return `Adding property with ID: ${propertyId} to favorites for user with ID: ${userId}`;
  }

  // Eliminar una propiedad de favoritos
  async removePropertyFromFavorites(userId: string, propertyId: string): Promise<string> {
    return `Removing property with ID: ${propertyId} from favorites for user with ID: ${userId}`;
  }

  // Verificar la identidad del usuario (para procesos de autenticación)
  async verifyIdentity(userId: string, identityDocument: string): Promise<string> {
    return `Verifying identity for user with ID: ${userId}`;
  }

  // Obtener estadísticas generales del usuario (por ejemplo, número de propiedades arrendadas o publicadas)
  async getUserStatistics(userId: string): Promise<string> {
    return `Fetching user statistics for user with ID: ${userId}`;
  }

  // Registrar una queja o comentario sobre una propiedad
  async registerPropertyComplaint(userId: string, complaintDto: any): Promise<string> {
    return `Registering property complaint for user with ID: ${userId}`;
  }

  // Generar un informe de actividad para el usuario
  async generateActivityReport(userId: string): Promise<string> {
    return `Generating activity report for user with ID: ${userId}`;
  }
    // Consultar el historial de solicitudes de propiedades
    async getPropertyRequestHistory(userId: string): Promise<string> {
      return `Fetching property request history for user with ID: ${userId}`;
    }
  
    // Solicitar información detallada de una propiedad
    async requestPropertyDetails(userId: string, propertyId: string): Promise<string> {
      return `Requesting details for property with ID: ${propertyId} by user with ID: ${userId}`;
    }
  
    // Consultar el estado de aprobación de un contrato
    async getContractApprovalStatus(userId: string, contractId: string): Promise<string> {
      return `Fetching contract approval status for user with ID: ${userId} and contract ID: ${contractId}`;
    }
  
  
  
    // Vincular una cuenta bancaria para pagos
    async linkBankAccount(userId: string, bankAccountDto: any): Promise<string> {
      return `Linking bank account for user with ID: ${userId}`;
    }
  
    // Desvincular una cuenta bancaria
    async unlinkBankAccount(userId: string, bankAccountId: string): Promise<string> {
      return `Unlinking bank account with ID: ${bankAccountId} for user with ID: ${userId}`;
    }
  
    // Consultar el historial de soporte técnico solicitado
    async getSupportHistory(userId: string): Promise<string> {
      return `Fetching support history for user with ID: ${userId}`;
    }
  
    // Configurar alertas personalizadas para propiedades
    async setCustomPropertyAlerts(userId: string, alertSettings: any): Promise<string> {
      return `Setting custom property alerts for user with ID: ${userId}`;
    }
  
    // Consultar el historial de alertas de propiedades recibidas
    async getPropertyAlertsHistory(userId: string): Promise<string> {
      return `Fetching property alerts history for user with ID: ${userId}`;
    }
  
    // Compartir una propiedad con otro usuario
    async shareProperty(userId: string, propertyId: string, recipientEmail: string): Promise<string> {
      return `Sharing property with ID: ${propertyId} by user with ID: ${userId} to ${recipientEmail}`;
    }
  
    // Actualizar las preferencias de comunicación del usuario
    async updateCommunicationPreferences(userId: string, preferencesDto: any): Promise<string> {
      return `Updating communication preferences for user with ID: ${userId}`;
    }
  
    // Consultar estadísticas de uso de la plataforma
    async getPlatformUsageStats(userId: string): Promise<string> {
      return `Fetching platform usage stats for user with ID: ${userId}`;
    }
  
    // Generar un informe de gastos totales
    async generateExpenseReport(userId: string): Promise<string> {
      return `Generating expense report for user with ID: ${userId}`;
    }
  
    // Notificar un problema con un usuario
    async reportUserIssue(userId: string, reportedUserId: string, issueDto: any): Promise<string> {
      return `Reporting issue with user ID: ${reportedUserId} by user with ID: ${userId}`;
    }
  
    // Consultar historial de problemas reportados por el usuario
    async getReportedIssuesHistory(userId: string): Promise<string> {
      return `Fetching reported issues history for user with ID: ${userId}`;
    }
  
    // Actualizar el método de pago predeterminado del usuario
    async updateDefaultPaymentMethod(userId: string, paymentMethod: string): Promise<string> {
      return `Updating default payment method to ${paymentMethod} for user with ID: ${userId}`;
    }
  
   
  
   
  
    // Obtener los términos y condiciones aceptados por el usuario
    async getAcceptedTermsAndConditions(userId: string): Promise<string> {
      return `Fetching accepted terms and conditions for user with ID: ${userId}`;
    }
}


